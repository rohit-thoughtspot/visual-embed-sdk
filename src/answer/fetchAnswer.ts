import { SessionInterface, DisplayMode } from '../types';
import { chartAnswerQuery } from './graphql-query/answer-chart-query';
import { tableAnswerQuery } from './graphql-query/answer-table-query';

export class FetchAnswers {
    private session: SessionInterface;

    private displayType: string;

    private query: string;

    private operation: string;

    private thoughtSpotHost: string;

    constructor(
        session: SessionInterface,
        displayType: string,

        operation: string,
        thoughtSpotHost: string,
    ) {
        this.session = session;
        this.displayType = displayType;
        this.query =
            this.displayType === DisplayMode.ChartMode
                ? chartAnswerQuery
                : tableAnswerQuery;
        this.operation = operation;
        this.thoughtSpotHost = thoughtSpotHost;
    }

    public getAnswer(offset: number, batchSize: number): any {
        let variable: any;
        if (this.displayType === DisplayMode.ChartMode) {
            variable = { batchSize, offset };
        } else {
            variable = {
                dataPaginationParams: {
                    isClientPaginated: true,
                    offset,
                    size: batchSize,
                },
            };
        }
        return this.fetchQuery({
            session: {
                ...this.session,
            },
            ...variable,
        });
    }

    private async fetchQuery(variables: any) {
        try {
            const response = await fetch(
                `${this.thoughtSpotHost}/prism/?op=${this.operation}`,
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json;charset=UTF-8',
                        accept: '*/*',
                        'accept-language': 'en-us',
                    },
                    body: JSON.stringify({
                        operationName: this.operation,
                        query: this.query,
                        variables: { ...variables },
                    }),
                    credentials: 'include',
                },
            );
            const result = await response.json();
            return result.data;
        } catch (errors) {
            throw new Error('failure');
        }
    }
}
