declare const ReactTagManager: {
    init: ({ code, debug, performance, }: {
        code: string;
        debug?: boolean | undefined;
        performance?: boolean | undefined;
    }) => void;
    action: ({ event, ...more }: {
        [key: string]: unknown;
        event: string;
    }) => void;
};

export { ReactTagManager };
