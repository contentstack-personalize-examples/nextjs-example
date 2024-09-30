function extractNavbarProps(data: any) {
  let { navbar } = data;

  return navbar.nav_item;
}

function extractFooterProps(data: any) {
  let { footer_text } = data;

  return footer_text;
}

function extractGridComponentProps(data: any) {
  let { modular_blocks } = data;

  return modular_blocks;
}

export { extractFooterProps, extractGridComponentProps, extractNavbarProps };