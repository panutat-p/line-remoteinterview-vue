import { DateTime } from 'luxon';

export function toMinuteSecond(milli: number): string {
  if (milli < 1000) {
    return `${milli} milliseconds`;
  }
  return DateTime.fromMillis(milli).toFormat("mm 'minutes' ss 'seconds'");
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
