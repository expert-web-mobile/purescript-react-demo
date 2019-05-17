export const fieldTypeNameReplacements: {[key:string]:string;} = 
  { "Date" : "JSDate",
    "Element.JSX" : "JSX",
    "ItemT" : "itemT",
    "ReactElement.React" : "React",
    "SectionT" : "sectionT",
    "StyleProp" : "CSS",
    "ScrollViewProps" : "(Record ScrollViewProps)",
    "(ComponentType.React Any)" : "JSX",
    "ReadonlyArray" : "Array"
  }

export const ignoreForeignDataList: string[] =
  [ "Array", "CSS", "Date", "Element.JSX", "JSDate", "JSX", "StyleProp", "(Record ScrollViewProps)", "ReactElement.React", "iTemT" ]

export const noChildren: string[] =
  [ "button" ]
