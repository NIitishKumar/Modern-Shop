// import './button.styles.jsx';
import { BaseButton, GoogleButton, InvertedButton } from './button.styles.jsx';

const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
return ({
  [BUTTON_TYPE_CLASSES.base]: BaseButton,
  [BUTTON_TYPE_CLASSES.google]: GoogleButton,
  [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
}[buttonType]);
}

const StyledButton = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>
  // return (
  //   <BaseButton
  //     className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
  //     {...otherProps}
  //   >
  //     {children}
  //   </BaseButton>
  // );
};

export default StyledButton;
