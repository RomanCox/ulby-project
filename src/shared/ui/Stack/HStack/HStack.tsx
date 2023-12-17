import { Flex, FlexPropsType } from '../Flex/Flex';

type HStackPropsType = Omit<FlexPropsType, 'direction'>

export const HStack = (props: HStackPropsType) => {
    return (
        <Flex {...props} direction="row" />
    );
};
