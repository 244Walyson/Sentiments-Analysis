import { Test, TestingModule } from "@nestjs/testing";
import { FindUserUseCase } from "./find-user.use-case";
import { ResponseUserDto } from "../dto/response-user.dto";

// Mock do UserRepositoryInterface
const mockUserRepository = {
  findOne: jest.fn(),
};

describe("UserService", () => {
  let useCase: FindUserUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindUserUseCase,
        { provide: "UserRepositoryInterface", useValue: mockUserRepository },
      ],
    }).compile();

    useCase = module.get<FindUserUseCase>(FindUserUseCase);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("findOne", () => {
    it("should return a ResponseUserDto for a specific user", async () => {
      const userId = "1";
      const user = { id: userId, name: "John Doe", email: "john@gmail.com" };
      mockUserRepository.findOne.mockResolvedValue(user);

      const result = await useCase.execute(userId);

      expect(result).toBeInstanceOf(ResponseUserDto);
      expect(result.id).toEqual(user.id);
      expect(result.name).toEqual(user.name);
      expect(result.email).toEqual(user.email);
      expect(mockUserRepository.findOne).toHaveBeenCalledWith(userId);
    });
  });
});
