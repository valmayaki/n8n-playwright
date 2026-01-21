import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class PlaywrightCredentials implements ICredentialType {
	name = 'playwrightCredentials';
	displayName = 'Playwright Credentials';
	documentationUrl = 'https://playwright.dev/docs/api/class-browsertype';
	properties: INodeProperties[] = [
		{
			displayName: 'Connection Type',
			name: 'connectionType',
			type: 'options',
			options: [
				{
					name: 'Launch Browser',
					value: 'launch',
				},
				{
					name: 'Connect Over CDP',
					value: 'connect',
				},
			],
			default: 'launch',
		},
		{
			displayName: 'Executable Path',
			name: 'executablePath',
			type: 'string',
			default: '',
			placeholder: '/usr/bin/google-chrome-stable',
			description: 'Path to a browser executable to run. If empty, uses the default bundled browser.',
			displayOptions: {
				show: {
					connectionType: [
						'launch',
					],
				},
			},
		},
		{
			displayName: 'Endpoint URL',
			name: 'endpointUrl',
			type: 'string',
			default: '',
			placeholder: 'http://localhost:9222 or ws://127.0.0.1:9222/...',
			description: 'A CDP websocket endpoint or http url to connect to (e.g. http://localhost:9222/ or ws://...)',
			displayOptions: {
				show: {
					connectionType: [
						'connect',
					],
				},
			},
		},
	];
}
