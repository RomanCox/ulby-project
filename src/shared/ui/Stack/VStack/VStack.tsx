import { Flex, FlexPropsType } from '../Flex/Flex';

type VStackPropsType = Omit<FlexPropsType, 'direction'>;

export const VStack = (props: VStackPropsType) => {
    const { align = 'start' } = props;

    return (
        <Flex {...props} direction="column" align={align} />
    );
};
