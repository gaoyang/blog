/**
 * 从 recordMap 中的 record（如 block[id]、notion_user[id]）取出 .value。
 * notion-utils 新版本移除了 getBlockValue 导出，故在本地实现。
 */
export function getBlockValue<T>(
  record: { value: T } | undefined
): T | undefined {
  return record?.value
}
