export interface Theme {
  fontSize: {
    xs: string;
    sm: string;
    md: string;
    base: string;
    lg: string;
  };
}

const theme: Theme = {
  fontSize: {
    xs: "0.6875rem", //11px
    sm: "0.8125rem", //13px
    md: "0.875rem", //14px
    base: "1rem", //16px
    lg: "1.125rem", //18px
  },
};

export default theme;
