export const tableAnswerQuery = `query GetTableWithHeadlineData(
  $session: BachSessionIdInput!
  $dataPaginationParams: DataPaginationParamsInput!
) {
  getAnswer(session: $session) {
    id {
      ...bachSession
    }
    answer {
      id
      headlineVisibilityMap
      queryableDataSource
      visualizations {
        id
        ... on TableViz {
          data(pagination: $dataPaginationParams)
          ...tableViz
        }
        ... on HeadlineViz {
          data(pagination: $dataPaginationParams)
          ...headlineViz
        }
      }
    }
  }
}
fragment bachSession on BachSessionId {
  sessionId
  genNo
  acSession {
    sessionId
    genNo
  }
}
fragment tableViz on TableViz {
  id
  clientState
  vizProp {
    ...tableVizProps
  }
  columns {
    ...vizColumn
  }
  sortInfo {
    columnId
    sortAscending
  }
}
fragment tableVizProps on TableVizProps {
  tableVizPropVersion
  wrapTableHeader
  widthState {
    columnId
    width
  }
  theme
  showTableFooter
  showGridSummary
  density
  orderedColumnIds
  columnProperties {
    columnId
    columnProperty {
      wrapColumnText
      conditionalFormatting {
        ...conditionalFormatting
      }
    }
  }
}
fragment conditionalFormatting on ConditionalFormatting {
  rows {
    backgroundFormatType
    value
    operator
    fontProperties {
      bold
      color
      italic
      strikeThrough
      underline
    }
    gradientBackgroundAttrs {
      backgroundFormatMidpoint
      colors
    }
    plotAsBand
    rangeValues {
      max
      min
    }
    solidBackgroundAttrs {
      color
    }
  }
}
fragment vizColumn on VizColumn {
  column {
    ...answerColumn
  }
  legacyMetricDefinition {
    row {
      color
      plotAsBand
      range {
        max
        min
      }
    }
  }
}
fragment answerColumn on AnswerColumn {
  id
  name
  type
  baseColumnType
  columnProps {
    version
    columnProperties {
      format {
        ...formatConfig
      }
    }
  }
  dataType
  aggregationType
  isGroupBy
  isUserDefinedTitle
  customCalendarType
  formatType
  calendarGuid
  format {
    pattern
    currencyFormat {
      column
      type
      isoCode
    }
  }
  referencedColumns {
    guid
    displayName
  }
  referencedTables {
    guid
    displayName
  }
  legacySheetProperties
  timeBucket
  geoConfig {
    type
    fixedValue
    columnGuid
    customFileGuid
    parent {
      type
      fixedValue
      columnGuid
      customFileGuid
    }
  }
}
fragment formatConfig on FormatConfig {
  category
  numberFormatConfig {
    decimals
    negativeValueFormat
    removeTrailingZeroes
    toSeparateThousands
    unit
  }
  percentageFormatConfig {
    decimals
    removeTrailingZeroes
  }
  currencyFormatConfig {
    decimals
    locale
    removeTrailingZeroes
    toSeparateThousands
    unit
  }
  customFormatConfig {
    format
  }
  isCategoryEditable
}
fragment headlineViz on HeadlineViz {
  id
  title
  vizProp {
    ...headlineVizProps
  }
  aggregationType
  possibleAggregations
  headlineColumn {
    ...answerColumn
  }
  sortInfo {
    columnId
    sortAscending
  }
}
fragment headlineVizProps on HeadlineVizProps {
  headlineVizPropVersion
  columnProperty {
    conditionalFormatting {
      ...conditionalFormatting
    }
    summariesNumberFormatConfig {
      ...formatConfig
    }
  }
}
`;
