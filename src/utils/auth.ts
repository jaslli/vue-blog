
/**
 * 获取Token
 */
export function getToken(): string {
    return "token";
}

/**
 * 格式化token（jwt格式）
 */
export const formatToken = (token: string): string => {
    return "Bearer " + token;
};
