import { Test, TestingModule } from "@nestjs/testing";
import { CreateUserDto } from "../dto/create-user.dto";
import { ResponseUserDto } from "../dto/response-user.dto";
import { User } from "../entities/user.entity";
import { CreateUserUseCase } from "./create-user.use-case";

// Mock do UserRepositoryInterface
const mockUserRepository = {
  create: jest.fn(),
};

describe("UserService", () => {
  let useCase: CreateUserUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserUseCase,
        { provide: "UserRepositoryInterface", useValue: mockUserRepository },
      ],
    }).compile();

    useCase = module.get<CreateUserUseCase>(CreateUserUseCase);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("create", () => {
    it("should create a user and return a ResponseUserDto", async () => {
      const createUserDto = new CreateUserDto({
        name: "John Doe",
        email: "new@gmail.com",
        password: "123456",
        username: "john_doe",
      });
      const createdUser = { id: "1", ...createUserDto };
      mockUserRepository.create.mockResolvedValue(createdUser);

      const result = await useCase.execute(createUserDto);

      expect(result).toBeInstanceOf(ResponseUserDto);
      expect(result.id).toEqual(createdUser.id);
      expect(result.name).toEqual(createdUser.name);
      expect(result.email).toEqual(createdUser.email);
      expect(result).not.toHaveProperty("password");
      expect(mockUserRepository.create).toHaveBeenCalledWith(expect.any(User));
    });
  });
});
