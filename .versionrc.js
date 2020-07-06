// https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.1.0/README.md
module.exports = {
    header: "All notable changes to this project will be documented in this file.",
    types: [
        { type: 'ci', hidden: true },
        { type: 'docs', hidden: '📝 Documentation' },
        { type: 'feat', section: '✨ Features' },
        { type: 'fix', section: '🐛 Bug Fixes' },
        { type: 'perf', hidden: true },
        { type: 'refactor', hidden: true },
        { type: 'style', section: `💄 Style` },
        { type: 'test', hidden: true },
        { type: 'translation ', hidden: '📙 Translation' },
        { type: 'chore', hidden: true }
    ]
};