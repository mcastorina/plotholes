import { useState, useEffect } from 'react';
import { Box, NumberInput, NumberInputField, FormControl, FormLabel } from '@chakra-ui/react'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react'

import { SliderUniform } from "./Types";

export default function SliderControlComponent({ name, uniform }: {
    name: string
    uniform: SliderUniform
}) {
    const [value, setValue] = useState(uniform.value);

    useEffect(() => {
        // uniforms.current[control.uniform] = { type: "f", value: value }
        uniform.value = value;
    });

    const onChange = (n: number) => {
        setValue(n);
        // uniforms.current[control.uniform].value = value;
    };
    const onChangeWithString = (_: string, n: number) => { onChange(n) };

    const step = uniform.step === undefined ? 0.01 : uniform.step;
    const min = uniform.min === undefined ? 0 : uniform.min;
    const max = uniform.max === undefined ? 1 : uniform.max;

    return <FormControl as="fieldset" >
        <FormLabel as="legend">{name}</FormLabel>
        <Box display="flex" style={{ gap: 20 }}>
            <NumberInput value={value} onChange={onChangeWithString} size="xs" textAlign="right" max={1} min={0} maxW="3rem">
                <NumberInputField paddingLeft="0.3em" paddingRight="0.3em" textAlign="right" />
            </NumberInput>
            <Slider step={step} onChange={onChange} focusThumbOnChange={false}
                min={min}
                max={max}
                aria-label={`slider-${name}`}
                value={value}>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>
        </Box>
    </FormControl >;
}