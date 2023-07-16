import React from 'react';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';

export default class PrimarySubhome extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubhomeChange = this.handleSubhomeChange.bind(this);
        this.subhomeOptionsDB = props.subhomeOptions;
        this.isMultiple = props.isMultiple;
        this.label = props.label;
    }

    handleSubhomeChange(event, value) {
        const { onChange } = this.props;
        onChange(value);
    }

    render() {
        const { primarySubhome } = this.props;

        const options = this.subhomeOptionsDB.map((option) => {
            const subhome = option.name.split("/")[1].toUpperCase();
            return {
                subhome: /[^/]+/.test(subhome) ? subhome : 'OTHERS',
                ...option,
            };
        });

        return (
            <Stack spacing={5} sx={{
                width: '100%',
                borderRadius: '8px',
                margin: '5px 20px',
                [`&.${autocompleteClasses.option}`]: {
                    padding: '8px',
                },
            }}>
                <Autocomplete
                    options={options.sort((a, b) => -b.subhome.localeCompare(a.subhome))}
                    groupBy={(option) => option.subhome}
                    getOptionLabel={(option) => option.name}
                    onChange={this.handleSubhomeChange}
                    disableCloseOnSelect
                    value={primarySubhome}
                    renderInput={(params) => (
                        <TextField {...params} label="Primary subhome" variant="standard" />
                    )}
                />
            </Stack>
        );
    }
}
