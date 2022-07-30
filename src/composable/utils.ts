import { DateTime } from 'luxon';

export function toMinute(milli: number): string {
  return DateTime.fromMillis(milli).toFormat("mm'm' ss's'");
}

export async function getBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () =>
      resolve(typeof reader.result == 'string' ? reader.result : '');
    reader.onerror = (error) => reject(error);
  });
}
