export declare class AccessTokenDto {
    access_token: string;
    expires_in: string;
    token_type: string;
    refresh_token: string;
    constructor(partial: Partial<AccessTokenDto>);
}
