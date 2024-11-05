import { Test, TestingModule } from "@nestjs/testing";
import { UpdateUserUseCase } from "./update-user.use-case";
import { UpdateUserDto } from "../dto/update-user.dto";
import { ResponseUserDto } from "../dto/response-user.dto";
import { User } from "../entities/user.entity";

// Mock do UserRepositoryInterface
const mockUserRepository = {
  update: jest.fn(),
};

describe("UserService", () => {
  let useCase: UpdateUserUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateUserUseCase,
        { provide: "UserRepositoryInterface", useValue: mockUserRepository },
      ],
    }).compile();

    useCase = module.get<UpdateUserUseCase>(UpdateUserUseCase);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("update", () => {
    it("should update a user and return a ResponseUserDto", async () => {
      const userId = "1";
      const updateUserDto: UpdateUserDto = {
        name: "John Doe Updated",
        email: "updated@gmail.com",
      };
      const updatedUser = { id: userId, ...updateUserDto };
      mockUserRepository.update.mockResolvedValue(updatedUser);

      const result = await useCase.execute(userId, updateUserDto);

      expect(result).toBeInstanceOf(ResponseUserDto);
      expect(result.id).toEqual(updatedUser.id);
      expect(result.name).toEqual(updatedUser.name);
      expect(result.email).toEqual(updatedUser.email);
      expect(mockUserRepository.update).toHaveBeenCalledWith(
        userId,
        expect.any(User)
      );
    });
  });
});
