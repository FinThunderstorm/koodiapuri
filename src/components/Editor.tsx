import * as React from 'react';
import { DiffEditor } from "@monaco-editor/react"
import Box from '@mui/material/Box';


const Editor = () => {
    const makeEditorWritable = (editor, monaco) => {
        editor.updateOptions({readOnly: false, originalEditable: true})
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <DiffEditor
            height="90vh"
            originalLanguage='text/plain'
            modifiedLanguage='text/plain'
            original="# starting comment"
            modified='# not starting comment'
            theme="vs-dark"
            onMount={makeEditorWritable}
            />
        </Box>
    )
}

export default Editor