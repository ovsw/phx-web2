const inputs = {
  'inputs': {
    'shadow': {
      'py': 2,
      'px': 3,
      'fontSize': '100%',
      'borderRadius': 'default',
      'appearance': 'none',
      'lineHeight': 'tight',
      'border': 'none',
      'color': 'gray.7',
      'boxShadow': 'default',
      '&:focus': {
        'outline': 'none',
        'boxShadow': 'outline'
      }
    },
    'inline': {
      'py': 2,
      'px': 3,
      'fontSize': '100%',
      'borderRadius': 'default',
      'appearance': 'none',
      'lineHeight': 'tight',
      'backgroundColor': 'gray.2',
      'borderWidth': '2px',
      'borderStyle': 'solid',
      'borderColor': 'gray.2',
      'color': 'gray.7',
      '&:focus': {
        'outline': 'none',
        'borderColor': 'primary',
        'backgroundColor': 'white'
      }
    },
    'underline': {
      'py': 2,
      'px': 3,
      'fontSize': '100%',
      'borderRadius': '0px',
      'appearance': 'none',
      'lineHeight': 'tight',
      'backgroundColor': 'transparent',
      'border': 'none',
      'borderBottomWidth': '2px',
      'borderBottomStyle': 'solid',
      'borderBottomColor': 'primary',
      'color': 'gray.7',
      '&:focus': {
        'outline': 'none',
        'borderColor': 'primary',
        'backgroundColor': 'white'
      }
    }
  }
}

export default inputs
