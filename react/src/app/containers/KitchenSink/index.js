import React from 'react';
import { Icon, Input, InputSearch } from '@momentum-ui/react';

export default class KitchenSink extends React.PureComponent {
  render() {
    const inputs = value => (
      <React.Fragment>
        <Input
          name={`inputSuccess${value}`}
          label="Success"
          htmlId={`inputSuccess${value}`}
          inputSize="small-12"
          value="Success Text"
          messageArr={[{ message: 'This is where the success message would be.', type: 'success' }]}
        />
        <Input
          name={`inputError${value}`}
          label="Error"
          htmlId={`inputError${value}`}
          inputSize="small-12"
          value="Error Text"
          messageArr={[{ message: 'This is where the error message would be.', type: 'error' }]}
        />
        <Input
          name={`inputWarning${value}`}
          label="Warning"
          htmlId={`inputWarning${value}`}
          inputSize="small-12"
          value="Warning Text"
          messageArr={[
            {
              message: 'This is where the warning message would be.',
              type: 'warning',
            },
          ]}
        />
        <Input
          name={`inputDoubleWarning${value}`}
          label="Double Warning"
          htmlId={`inputDoubleWarning${value}`}
          inputSize="small-12"
          value="Double Warning Text"
          messageArr={[
            {
              message: 'This is where the warning message would be.',
              type: 'warning',
            },
            {
              message: 'This is where the warning message would be.',
              type: 'warning',
            },
          ]}
        />
        <Input
          name={`default${value}`}
          label="Default"
          htmlId={`default${value}`}
          inputSize="small-12"
        />
        <Input
          name={`defaultPill${value}`}
          label="Pill"
          htmlId={`defaultPill${value}`}
          inputSize="small-12"
          shape="pill"
        />
        <Input
          name={`Multiline${value}`}
          label="Multiline"
          htmlId={`Multiline${value}`}
          inputSize="small-12"
          multiline
        />
        <div className="row">
          <Input
            name={`nested${value}`}
            label="Nested 1"
            htmlId={`nested${value}`}
            inputSize="small-6"
            nestedLevel={1}
          />
        </div>
        <div className="row">
          <Input
            name={`nested2${value}`}
            label="Nested 2"
            htmlId={`nested2${value}`}
            inputSize="small-6"
            nestedLevel={2}
          />
        </div>
        <div className="row">
          <Input
            name={`nested3${value}`}
            label="Nested 3"
            htmlId={`nested3${value}`}
            inputSize="small-6"
            nestedLevel={3}
          />
        </div>
        <Input
          name={`readOnly${value}`}
          label="Read Only"
          htmlId={`readOnly${value}`}
          inputSize="small-12"
          value="With Placeholder"
          readOnly
        />
        <Input
          name={`disabled${value}`}
          label="Disabled"
          htmlId={`disabled${value}`}
          inputSize="small-12"
          placeholder="With Placeholder"
          disabled
        />
        <Input
          name={`disabledWithValue${value}`}
          label="Disabled Value"
          htmlId={`disabledWithValue${value}`}
          inputSize="small-12"
          value="With Value"
          disabled
        />
        <Input
          name={`disabledro${value}`}
          label="Disabled Read Only"
          htmlId={`disabledro${value}`}
          inputSize="small-12"
          value="Disabled ReadOnly Input"
          disabled
          readOnly
        />
        <Input
          name={`placeholder${value}`}
          label="Placeholder"
          htmlId={`placeholder${value}`}
          inputSize="small-12"
          placeholder="With Placeholder"
        />
        <Input
          name={`clearInput${value}`}
          label="Clear"
          htmlId={`clearInput${value}`}
          inputSize="small-12"
          placeholder="Placeholder Text"
          value="Press or click the clear icon to clear this input"
          clear
        />
        <Input
          name={`rightIcon${value}`}
          label="Right Icon"
          htmlId={`rightIcon${value}`}
          inputSize="small-12"
          placeholder="Placeholder Text"
          inputAfter={<Icon name="accessibility_16" />}
        />
        <Input
          name={`leftIcon${value}`}
          label="Left Icon"
          htmlId={`leftIcon${value}`}
          inputSize="small-12"
          placeholder="Placeholder Text"
          inputBefore={<Icon name="accessibility_16" />}
        />
        <Input
          name={`leftIconDisabled${value}`}
          label="Left Icon Disabled"
          htmlId={`leftIconDisabled${value}`}
          inputSize="small-12"
          placeholder="Placeholder Text"
          inputBefore={<Icon name="accessibility_16" />}
          disabled
        />
        <Input
          name={`clearLeftIcon${value}`}
          label="Clear and Left Icon"
          htmlId={`clearLeftIcon${value}`}
          inputSize="small-12"
          placeholder="Placeholder Text"
          inputBefore={<Icon name="accessibility_16" />}
          clear
          value="Press or click the clear icon to clear this input"
        />
        <Input
          name={`help${value}`}
          label="Help Text"
          htmlId={`help${value}`}
          inputSize="small-12"
          placeholder="With Placeholder"
          inputHelpText="Help Text"
        />
        <Input
          name={`inputSecondaryLabel${value}`}
          label="Secondary Label"
          htmlId={`inputSecondaryLabel${value}`}
          inputSize="small-12"
          secondaryLabel="Secondary Label"
        />
        <Input
          name={`inputDisabledSecondaryLabel${value}`}
          label="Disabled Secondary Label"
          htmlId={`inputDisabledSecondaryLabel${value}`}
          inputSize="small-12"
          secondaryLabel="Secondary Label"
          disabled
        />
        <Input
          name={`inputSecondaryHelpLabel${value}`}
          label="Secondary/Help Label"
          htmlId={`inputSecondaryHelpLabel${value}`}
          inputSize="small-12"
          secondaryLabel="Secondary Label"
          inputHelpText="Help Text"
        />
        <Input
          name={`inputSecondaryHelpLabelDisabled${value}`}
          label="Disabled Secondary/Help Label"
          htmlId={`inputSecondaryHelpLabelDisabled${value}`}
          inputSize="small-12"
          secondaryLabel="Secondary Label"
          inputHelpText="Help Text"
          disabled
        />

        <Input
          name={`FilledInputSuccess${value}`}
          label="Filled Success"
          htmlId={`filledInputSuccess${value}`}
          isFilled
          inputSize="small-12"
          value="Success Text"
          messageArr={[{ message: 'This is where the success message would be.', type: 'success' }]}
        />
        <Input
          name={`FilledInputError${value}`}
          label="Filled Error"
          htmlId={`filledInputError${value}`}
          isFilled
          inputSize="small-12"
          value="Error Text"
          messageArr={[{ message: 'This is where the error message would be.', type: 'error' }]}
        />
        <Input
          name={`FilledInputWarning${value}`}
          label="Filled Warning"
          htmlId={`filledInputWarning${value}`}
          isFilled
          inputSize="small-12"
          value="Warning Text"
          messageArr={[
            {
              message: 'This is where the warning message would be.',
              type: 'warning',
            },
          ]}
        />
        <Input
          name={`FilledInputDoubleWarning${value}`}
          label="Filled Double Warning"
          htmlId={`filledInputDoubleWarning${value}`}
          isFilled
          inputSize="small-12"
          value="Double Warning Text"
          messageArr={[
            {
              message: 'This is where the warning message would be.',
              type: 'warning',
            },
            {
              message: 'This is where the warning message would be.',
              type: 'warning',
            },
          ]}
        />
        <Input
          name={`Filleddefault${value}`}
          label="Filled Default"
          htmlId={`filleddefault${value}`}
          isFilled
          inputSize="small-12"
        />
        <Input
          name={`FilledDefaultPill${value}`}
          label="Filled Pill"
          htmlId={`filledDefaultPill${value}`}
          isFilled
          inputSize="small-12"
          shape="pill"
        />
        <Input
          name={`FilledMultiline${value}`}
          label="Filled Multiline"
          htmlId={`filledMultiline${value}`}
          isFilled
          inputSize="small-12"
          multiline
        />
        <div className="row">
          <Input
            name={`FilledNested${value}`}
            label="Filled Nested 1"
            htmlId={`filledNested${value}`}
            isFilled
            inputSize="small-6"
            nestedLevel={1}
          />
        </div>
        <div className="row">
          <Input
            name={`FilledNested2${value}`}
            label="Filled Nested 2"
            htmlId={`filledNested2${value}`}
            isFilled
            inputSize="small-6"
            nestedLevel={2}
          />
        </div>
        <div className="row">
          <Input
            name={`FilledNested3${value}`}
            label="Filled Nested 3"
            htmlId={`filledNested3${value}`}
            isFilled
            inputSize="small-6"
            nestedLevel={3}
          />
        </div>
        <Input
          name={`FilledReadOnly${value}`}
          label="Filled Read Only"
          htmlId={`filledReadOnly${value}`}
          isFilled
          inputSize="small-12"
          value="With Placeholder"
          readOnly
        />
        <Input
          name={`FilledDisabled${value}`}
          label="Filled Disabled"
          htmlId={`filledDisabled${value}`}
          isFilled
          inputSize="small-12"
          placeholder="With Placeholder"
          disabled
        />
        <Input
          name={`FilledDisabledWithValue${value}`}
          label="Filled Disabled Value"
          htmlId={`filledDisabledWithValue${value}`}
          isFilled
          inputSize="small-12"
          value="With Value"
          disabled
        />
        <Input
          name={`FilledDisabledro${value}`}
          label="Filled Disabled Read Only"
          htmlId={`filledDisabledro${value}`}
          isFilled
          inputSize="small-12"
          value="Disabled ReadOnly Input"
          disabled
          readOnly
        />
        <Input
          name={`FilledPlaceholder${value}`}
          label="Filled Placeholder"
          htmlId={`filledPlaceholder${value}`}
          isFilled
          inputSize="small-12"
          placeholder="With Placeholder"
        />
        <Input
          name={`FilledClearInput${value}`}
          label="Filled Clear"
          htmlId={`filledClearInput${value}`}
          isFilled
          inputSize="small-12"
          placeholder="Placeholder Text"
          value="Press or click the clear icon to clear this input"
          clear
        />
        <Input
          name={`FilledRightIcon${value}`}
          label="Filled Right Icon"
          htmlId={`filledRightIcon${value}`}
          isFilled
          inputSize="small-12"
          placeholder="Placeholder Text"
          inputAfter={<Icon name="accessibility_16" />}
        />
        <Input
          name={`FilledLeftIcon${value}`}
          label="Filled Left Icon"
          htmlId={`filledLeftIcon${value}`}
          isFilled
          inputSize="small-12"
          placeholder="Placeholder Text"
          inputBefore={<Icon name="accessibility_16" />}
        />
        <Input
          name={`FilledLeftIconDisabled${value}`}
          label="Filled Left Icon Disabled"
          htmlId={`filledLeftIconDisabled${value}`}
          isFilled
          inputSize="small-12"
          placeholder="Placeholder Text"
          inputBefore={<Icon name="accessibility_16" />}
          disabled
        />
        <Input
          name={`FilledClearLeftIcon${value}`}
          label="Filled Clear and Left Icon"
          htmlId={`filledClearLeftIcon${value}`}
          isFilled
          inputSize="small-12"
          placeholder="Placeholder Text"
          inputBefore={<Icon name="accessibility_16" />}
          clear
          value="Press or click the clear icon to clear this input"
        />
        <Input
          name={`FilledHelp${value}`}
          label="Filled Help Text"
          htmlId={`filledHelp${value}`}
          isFilled
          inputSize="small-12"
          placeholder="With Placeholder"
          inputHelpText="Help Text"
        />
        <Input
          name={`FilledInputSecondaryLabel${value}`}
          label="Filled Secondary Label"
          htmlId={`filledInputSecondaryLabel${value}`}
          isFilled
          inputSize="small-12"
          secondaryLabel="Secondary Label"
        />
        <Input
          name={`FilledInputDisabledSecondaryLabel${value}`}
          label="Filled Disabled Secondary Label"
          htmlId={`filledInputDisabledSecondaryLabel${value}`}
          isFilled
          inputSize="small-12"
          secondaryLabel="Secondary Label"
          disabled
        />
        <Input
          name={`FilledInputSecondaryHelpLabel${value}`}
          label="Filled Secondary/Help Label"
          htmlId={`filledInputSecondaryHelpLabel${value}`}
          isFilled
          inputSize="small-12"
          secondaryLabel="Secondary Label"
          inputHelpText="Help Text"
        />
        <Input
          name={`FilledInputSecondaryHelpLabelDisabled${value}`}
          label="Filled Disabled Secondary/Help Label"
          htmlId={`filledInputSecondaryHelpLabelDisabled${value}`}
          isFilled
          inputSize="small-12"
          secondaryLabel="Secondary Label"
          inputHelpText="Help Text"
          disabled
        />

        <InputSearch
          name={`defaultInputSearch${value}`}
          htmlId={`defaultInputSearch${value}`}
          inputSize="small-12"
          label="Default Search"
        />
        <InputSearch
          name={`loadingInputSearch${value}`}
          htmlId={`loadingInputSearch${value}`}
          inputSize="small-12"
          label="Loading Search"
          isLoading
        />
        <InputSearch
          name={`searchclear${value}`}
          htmlId={`searchclear${value}`}
          inputSize="small-12"
          label="Search with Clear"
          clear
        />
        <InputSearch
          name={`searchpill${value}`}
          htmlId={`searchpill${value}`}
          inputSize="small-12"
          shape="pill"
          clear
        />
        <InputSearch
          name={`defaultInputSearchFilled${value}`}
          htmlId={`defaultInputSearchFilled${value}`}
          inputSize="small-12"
          label="Search Filled"
          isFilled
        />
        <InputSearch
          name={`filledLoadingInputSearch${value}`}
          htmlId={`filledLoadingInputSearch${value}`}
          inputSize="small-12"
          label="Loading Filled Search"
          isFilled
          isLoading
        />
        <InputSearch
          name={`searchclearFilled${value}`}
          htmlId={`searchclearFilled${value}`}
          inputSize="small-12"
          label="Search with Clear Filled"
          clear
          isFilled
        />
        <InputSearch
          name={`searchpillFilled${value}`}
          htmlId={`searchpillFilled${value}`}
          inputSize="small-12"
          label="Search Pill Filled"
          shape="pill"
          clear
          isFilled
        />
      </React.Fragment>
    );
    return (
      <div>
        <h1>React Kitchen Sink</h1>
        <div className="row" style={{ padding: '1rem' }}>{inputs(1)}</div>
        <div className="md--dark row" style={{ backgroundColor: 'black', padding: '1rem' }}>
          {inputs(2)}
        </div>
        <div className="md--contrast">
          <div className="row" style={{ padding: '1rem' }}>
            {inputs(3)}
          </div>
          <div className="md--dark row" style={{ backgroundColor: 'black', padding: '1rem' }}>
            {inputs(4)}
          </div>
        </div>
      </div>
    );
  }
}