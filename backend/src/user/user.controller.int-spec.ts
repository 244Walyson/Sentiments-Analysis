import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { PrismaService } from "../prisma.service";
import { UserRepositoryInterface } from "./repositories/user.repository.interface";
import { UserModule } from "./user.module";

describe("UserController (integration)", () => {
  let app: INestApplication;
  let prismaService: PrismaService;

  const mockUserRepository: UserRepositoryInterface = {
    create: jest
      .fn()
      .mockResolvedValue({ id: "1", name: "John Doe", email: "new@gmail.com" }),
    findOne: jest.fn(),
    findAllByCompanyId: jest
      .fn()
      .mockResolvedValue([
        { id: "1", name: "John Doe", email: "new@gmail.com" },
      ]),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    })
      .overrideProvider(PrismaService)
      .useValue(prismaService)
      .overrideProvider("UserRepositoryInterface")
      .useValue(mockUserRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe("/users (GET)", () => {
    it("should return an array of users", async () => {
      const companyId = "123";

      const response = await request(app.getHttpServer())
        .get(`/users/company/${companyId}`)
        .expect(200);

      expect(response.body).toEqual([
        { id: "1", name: "John Doe", email: "new@gmail.com" },
      ]);
    });
  });

  describe("/users (POST)", () => {
    it("should create a user", async () => {
      const createUserDto = {
        name: "John Doe",
        email: "new@gmail.com",
        password: "123456",
      };

      const response = await request(app.getHttpServer())
        .post("/users")
        .send(createUserDto)
        .expect(201);

      expect(response.body).toEqual({
        id: "1",
        name: createUserDto.name,
        email: createUserDto.email,
      });
    });
  });
});
