import prompt from 'react-native-prompt-android';

interface Options {
  title: string;
  subTittle?: string;
  buttons: PromptButton[];
  promptType?: 'plain-text' | 'secure-text';
  placeholder?: string;
  defaultValue?: string;
}

interface PromptButton {
  text: string;
  onPress: () => void;
  style?: 'cancel' | 'default' | 'destructive';
}

export const showPrompt = ({
  title,
  subTittle,
  buttons,
  promptType = 'plain-text',
  placeholder,
  defaultValue,
}: Options) => {
  prompt(title, subTittle, buttons, {
    type: promptType,
    cancelable: false,
    defaultValue: defaultValue,
    placeholder: placeholder,
  });
};
