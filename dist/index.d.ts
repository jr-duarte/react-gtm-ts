declare const ReactTagManager: {
    init: ({ code, debug }: {
        code: string;
        debug?: boolean | undefined;
    }) => void;
    action: ({ event, ...more }: {
        [key: string]: string | number;
        event: string;
    }) => void;
};

export { ReactTagManager };
