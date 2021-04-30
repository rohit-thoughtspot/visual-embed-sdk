export const chartAnswerQuery = ` query GetChartWithData($session: BachSessionIdInput!, $batchSize: Int, $offset: Int) {
		getAnswer(session: $session) {
			id {
				...bachSession
			}
			answer {
				id
				queryableDataSource
				permission {
					...permission
				}
				visualizations {
					id
					... on ChartViz {
						data(pagination: { isClientPaginated: false, size: $batchSize, offset: $offset })
						...chartViz
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
	fragment permission on ObjectPermission {
		objectAccessLevel
		dataSourceAccessLevel
		dataSourceNamesWithNoAccess
	}
	fragment chartViz on ChartViz {
		id
		sortOrder {
			columnId
			order
			isUserSorted
			sortAscending
		}
		columns {
			...vizColumn
		}
		clientState
		vizProp {
			...chartVizProps
		}
		config {
			...chartConfig
		}
		suggestedConfig {
			...chartConfig
		}
		sortInfo {
			columnId
			sortAscending
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
	fragment chartVizProps on ChartVizProps {
		version
		axisProperties {
			id
			properties {
				axisType
				format {
					...formatConfig
				}
				isOpposite
				linkedColumns
				name
				yAxisRange {
					max
					min
				}
			}
		}
		chartProperties {
			allLabels
			axisExtremes {
				x {
					max
					min
				}
				y {
					max
					min
				}
			}
			chartSpecific {
				pivotState {
					columnExpandedPaths {
						paths
					}
					rowExpandedPaths {
						paths
					}
				}
				useFlatLayout
				hidePivotSummaries
				isHeatmapOverlayed
				isStackedAsPercent
				markersEnabled
				stackedAsPercentFormat {
					...formatConfig
				}
				summaryFormat {
					...formatConfig
				}
				summaryMode
			}
			dataSize
			gridLines {
				xGridlineEnabled
				yGridlineEnabled
			}
			isZoomed
			mapviewport {
				center
				zoomLevel
			}
			responsiveLayoutDisabled
			responsiveLayoutPreference
			showLinearRegressionLine
			showStackedLabels
			visibleSeriesNames
		}
		columnProperties {
			columnId
			columnProperty {
				dataLabels
				conditionalFormatting {
					...conditionalFormatting
				}
			}
		}
		customColorSelectorArray
		seriesColors {
			color
			serieName
		}
		multiColorSeriesColors {
			serieName
			colorMap {
				serieName
				color
			}
		}
		systemSeriesColors {
			color
			serieName
		}
		systemMultiColorSeriesColors {
			serieName
			colorMap {
				serieName
				color
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
	fragment chartConfig on ChartConfig {
		chartType
		isLocked
		axisConfig {
			x {
				...answerColumn
			}
			y {
				...answerColumn
			}
			color {
				...answerColumn
				...answerColumn
			}
			size {
				...answerColumn
			}
			category {
				...answerColumn
			}
			hidden {
				...answerColumn
			}
			color {
				...answerColumn
			}
		}
	}
	`;
