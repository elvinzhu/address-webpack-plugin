/**
 * print access info after webpack compilation done
 */
export declare class AddressWebpackPlugin {
  constructor(options: IOptions) {}
}

interface IOptions {
  /**
   * port. default to '8080'
   */
  port: number;
  /**
   * start path. default to '/'
   */
  openPage?: string;
  /**
   * compiler hook to use. default to 'done'
   */
  compilerHookName?: string;
}
