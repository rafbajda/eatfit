import React from 'react';
import emojis from '../../../shared/constants/emojis';
import {
    LegendDescription,
    LegendHeader,
    LegendIcon,
    LegendIconDescriptionHeader,
    LegendListElement,
    LegendRow
} from '../styles/legendStyles';

const Legend = () => {
    const {
        veryBadImpact,
        badImpact,
        neutralImpact,
        goodImpact,
        veryGoodImpact
    } = emojis;
    const list = [
        {
            rightElement: (
                <LegendIconDescriptionHeader>
                    Very good impact on health
                </LegendIconDescriptionHeader>
            ),
            leftElement: <LegendIcon>{veryGoodImpact}</LegendIcon>
        },
        {
            rightElement: (
                <LegendIconDescriptionHeader>
                    Pretty good impact on health
                </LegendIconDescriptionHeader>
            ),
            leftElement: <LegendIcon>{goodImpact}</LegendIcon>
        },

        {
            rightElement: (
                <LegendIconDescriptionHeader>
                    Rather neutral impact on health
                </LegendIconDescriptionHeader>
            ),
            leftElement: <LegendIcon>{neutralImpact}</LegendIcon>
        },
        {
            rightElement: (
                <LegendIconDescriptionHeader>
                    Pretty bad impact on health
                </LegendIconDescriptionHeader>
            ),
            leftElement: <LegendIcon>{badImpact}</LegendIcon>
        },
        {
            rightElement: (
                <LegendIconDescriptionHeader>
                    Very bad impact on health
                </LegendIconDescriptionHeader>
            ),
            leftElement: <LegendIcon>{veryBadImpact}</LegendIcon>
        }
    ];
    return (
        <LegendRow>
            <LegendHeader>Instruction</LegendHeader>
            <LegendDescription>
                Each substance has its own score, which describes the effect of
                this substance on health. The product rating is calculated on
                the basis of the weighted average of each substance that the
                product contains. List of available results:
            </LegendDescription>
            {list.map((l, i) => (
                <LegendListElement
                    key={i}
                    leftElement={l.leftElement}
                    rightElement={l.rightElement}
                    bottomDivider
                    topDivider
                />
            ))}
        </LegendRow>
    );
};

export default Legend;
