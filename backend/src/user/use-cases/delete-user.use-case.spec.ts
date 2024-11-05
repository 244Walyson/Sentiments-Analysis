import { Test, TestingModule } from "@nestjs/testing";
import { DeleteUserUseCase } from "./delete-user.use-case";

// Mock do UserRepositoryInterface
const mockUserRepository = {
  delete: jest.fn(),
};

describe("UserService", () => {
  let useCase: DeleteUserUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteUserUseCase,
        { provide: "UserRepositoryInterface", useValue: mockUserRepository },
      ],
    }).compile();

    useCase = module.get<DeleteUserUseCase>(DeleteUserUseCase);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("delete", () => {
    it("should delete a user and return the result", async () => {
      const userId = "1";
      mockUserRepository.delete.mockResolvedValue(true);

      const result = await useCase.execute(userId);

      expect(result).toBe(true);
      expect(mockUserRepository.delete).toHaveBeenCalledWith(userId);
    });
  });
});
