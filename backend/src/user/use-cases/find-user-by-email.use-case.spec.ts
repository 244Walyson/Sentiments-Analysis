import { Test, TestingModule } from "@nestjs/testing";
import { ResponseUserDto } from "../dto/response-user.dto";
import { FindUserByEmailUseCase } from "./find-user-by-email.use-case";

const mockUserRepository = {
  findByEmail: jest.fn(),
};

describe("UserService", () => {
  let useCase: FindUserByEmailUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindUserByEmailUseCase,
        { provide: "UserRepositoryInterface", useValue: mockUserRepository },
      ],
    }).compile();

    useCase = module.get<FindUserByEmailUseCase>(FindUserByEmailUseCase);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("findOne", () => {
    it("should return a ResponseUserDto for a specific user", async () => {
      const userEmail = "john@gmail.com";
      const user = { id: "1", name: "John Doe", email: userEmail };
      mockUserRepository.findByEmail.mockResolvedValue(user);

      const result = await useCase.execute(userEmail);

      expect(result).toBeInstanceOf(ResponseUserDto);
      expect(result.id).toEqual(user.id);
      expect(result.name).toEqual(user.name);
      expect(result.email).toEqual(userEmail);
      expect(mockUserRepository.findByEmail).toHaveBeenCalledWith(userEmail);
    });
  });
});
