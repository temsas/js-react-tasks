import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
export default class MarkdownEditor extends React.Component{
    constructor(props) {
        super(props);
        this.editRef = React.createRef()
    }
    componentDidMount() {
        this.editor = new Editor({
            el: this.editRef.current,
            hideModeSwitch: true,
            previewStyle: 'vertical',
            initialEditType:'markdown'
        })
        this.editor.addHook("change", () =>{
            const content = this.editor.getMarkdown()
            this.props.onContentChange(content)
        })
    }
    componentWillUnmount() {
        this.editor.destroy()
    }
    render() {
        return <div ref={this.editRef} ></div>
    }
}
// END
