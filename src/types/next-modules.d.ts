declare module 'next/server' {
  export class NextRequest extends Request {
    readonly nextUrl: URL;
  }
  export class NextResponse<Body = any> extends Response {
    static json<JsonBody>(body: JsonBody, init?: ResponseInit): NextResponse<JsonBody>;
  }
}

declare module 'next/server.js' {
  export class NextRequest extends Request {
    readonly nextUrl: URL;
  }
  export class NextResponse<Body = any> extends Response {
    static json<JsonBody>(body: JsonBody, init?: ResponseInit): NextResponse<JsonBody>;
  }
}
