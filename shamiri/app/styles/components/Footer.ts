
export const FooterContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.4rem 26px',
    background: (props: any) => props.theme.colors.gray800,
    marginTop: '26px',
  };
  
  export const FooterParagraph = {
    marginBottom: '26px',
    textAlign: 'center',
  };
  
  // Merge the styles
  export const MergedFooterStyles = {
    ...FooterContainer,
    '> p': FooterParagraph,
  };
  
