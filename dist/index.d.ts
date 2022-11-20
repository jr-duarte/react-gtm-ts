type GTMInitProps = {
    GTMCode: string;
};
declare const GTMInit: ({ GTMCode }: GTMInitProps) => void;

type GTMActionProps = {
    event: string;
    [key: string]: string;
};
declare const GTMAction: ({ event, ...more }: GTMActionProps) => void;

export { GTMAction, GTMInit };
