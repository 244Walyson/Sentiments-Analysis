import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ResponseUserDto } from "./dto/response-user.dto";
import { CreateUserUseCase } from "./use-cases/create-user.use-case";
import { UpdateUserUseCase } from "./use-cases/update-user.use-case";
import { DeleteUserUseCase } from "./use-cases/delete-user.use-case";
import { FindUserUseCase } from "./use-cases/find-user.use-case";

const mockUserUseCase = {
  execute: jest.fn(),
};

describe("UserController", () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        { provide: CreateUserUseCase, useValue: mockUserUseCase },
        { provide: UpdateUserUseCase, useValue: mockUserUseCase },
        { provide: DeleteUserUseCase, useValue: mockUserUseCase },
        { provide: FindUserUseCase, useValue: mockUserUseCase },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("create", () => {
    it("should create a user without returning the password", async () => {
      const createUserDto: CreateUserDto = {
        name: "John Doe",
        email: "new@gmail.com",
        password: "123456",
      };

      // Simulando o retorno esperado de UserService sem a propriedade password
      mockUserUseCase.execute.mockResolvedValue(
        new ResponseUserDto({
          id: "1",
          name: createUserDto.name,
          email: createUserDto.email,
        })
      );

      const result = await controller.create(createUserDto);

      expect(result).toBeInstanceOf(ResponseUserDto);
      expect(mockUserUseCase.execute).toHaveBeenCalledWith(createUserDto);
      expect(result).toHaveProperty("id");
      expect(result.name).toEqual(createUserDto.name);
      expect(result.email).toEqual(createUserDto.email);

      // Verifica que a propriedade password não está presente
      expect(result).not.toHaveProperty("password");
    });
  });

  describe("findAll", () => {
    it("should return an array of users", async () => {
      const companyId = "123";
      const result = [
        new ResponseUserDto({
          id: "1",
          name: "John Doe",
          email: "new@gmail.com",
        }),
      ];

      mockUserUseCase.execute.mockResolvedValue(result);

      const users = controller.findAll({ companyId });

      expect(users).toEqual("This action returns all users");
      //expect(mockUserUseCase.execute).toHaveBeenCalledWith({ companyId });
    });
  });

  describe("findOne", () => {
    it("should return a user by id", async () => {
      const result = { id: "1", name: "John Doe", email: "new@gmail.com" };
      const userId = "1";
      mockUserUseCase.execute.mockResolvedValue(result);

      expect(await controller.findOne(userId)).toEqual(result);
      expect(mockUserUseCase.execute).toHaveBeenCalledWith(userId);
    });
  });

  describe("update", () => {
    it("should update a user", async () => {
      const updateUserDto: UpdateUserDto = {
        name: "Jane Doe",
        email: "jane@gmail.com",
      };
      const userId = "1";
      const result = { ...updateUserDto, id: userId };
      mockUserUseCase.execute.mockResolvedValue(result);

      expect(await controller.update(userId, updateUserDto)).toEqual(result);
      expect(mockUserUseCase.execute).toHaveBeenCalledWith(
        userId,
        updateUserDto
      );
    });
  });

  describe("remove", () => {
    it("should delete a user", async () => {
      const userId = "1";
      mockUserUseCase.execute.mockResolvedValue({});

      await controller.remove(userId);
      expect(mockUserUseCase.execute).toHaveBeenCalledWith(userId);
    });
  });
});
