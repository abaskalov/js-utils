export const getQrUrl = ({
  data,
  width = 150,
  height = 150,
}: {
  data: string;
  width?: number;
  height?: number;
}): string =>
  `https://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&size=${width}x${height}&data=${data}`;
