declare const ReactTagManager: {
    init: ({ code, debug }: {
        code: string;
        debug?: boolean | undefined;
    }) => void;
    action: ({ event, ...more }: {
        [key: string]: any;
        event: string;
    }) => void;
};

export { ReactTagManager };
