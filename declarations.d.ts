declare module "plaiceholder" {
  interface PlaiceholderMetadata {
    width: number;
    height: number;
  }

  interface PlaiceholderResult {
    base64: string;
    metadata: PlaiceholderMetadata;
  }

  export function getPlaiceholder(
    buffer: Buffer,
    options?: { size?: number }
  ): Promise<PlaiceholderResult>;
}
