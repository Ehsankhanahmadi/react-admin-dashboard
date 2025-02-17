import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CodeBlock from '@tiptap/extension-code-block'
import Viewbox from './viewbox'
import { useState } from 'react'
import BulletList from '@tiptap/extension-bullet-list' // chone darim az tailwind estefadeh mikonim pish 
// darze list ha khadab ast



const Editorbox = () => {

  const [text, settext] = useState<any>('')

  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  const handleSave = () => {
    if (editor) {
      const html = editor.getHTML()
      // const json = editor.getJSON()
      settext(html)
      console.log(html) // data
      // console.log(json) // data
    }
  }


  return (
    <>
    <div className="p-2 pb-5">
      <div className="grid grid-cols-4 grid-rows-5 md:grid-cols-7 md:grid-rows-3 gap-2 justify-between items-center">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={`${editor.isActive('bold') ? 'is-active editorbuttenon' : 'editorbutten'}`}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={`${editor.isActive('italic') ? 'is-active editorbuttenon' : 'editorbutten'} `}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
            }
            className={`${editor.isActive('strike') ? 'is-active editorbuttenon' : 'editorbutten'}`}
        >
          Strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={
            !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
          }
          className={`${editor.isActive('code') ? 'is-active editorbuttenon' : 'editorbutten'}`}
        >
          Code
        </button>
        <button className='editorbutten' onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          Clear marks
        </button>
        <button className='editorbutten' onClick={() => editor.chain().focus().clearNodes().run()}>
          Clear nodes
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`${editor.isActive('paragraph') ? 'is-active editorbuttenon' : 'editorbutten'}`}
        >
          Paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`${editor.isActive('heading', { level: 1 }) ? 'is-active editorbuttenon' : 'editorbutten'}`}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`${editor.isActive('heading', { level: 2 }) ? 'is-active editorbuttenon' : 'editorbutten'}`}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`${editor.isActive('heading', { level: 3 }) ? 'is-active editorbuttenon' : 'editorbutten'}`}
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={`${editor.isActive('heading', { level: 4 }) ? 'is-active editorbuttenon' : 'editorbutten'}`}
        >
          H4
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={`${editor.isActive('heading', { level: 5 }) ? 'is-active editorbuttenon' : 'editorbutten'}`}
        >
          H5
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={`${editor.isActive('heading', { level: 6 }) ? 'is-active editorbuttenon' : 'editorbutten'}`}
        >
          H6
        </button>
        <button
          onClick={() => editor.commands.toggleBulletList()}
          className={`${editor.isActive('bulletList') ? 'is-active editorbuttenon' : 'editorbutten'}`}
        >
          Bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`${editor.isActive('orderedList') ? 'is-active editorbuttenon' : 'editorbutten'}`}
        >
          Ordered list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`${editor.isActive('codeBlock') ? 'is-active editorbuttenon' : 'editorbutten'}`}
        >
          Code block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`${editor.isActive('blockquote') ? 'is-active editorbutten' : 'editorbutten'}`}
        >
          Blockquote
        </button>
        <button className='editorbutten' onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          Horizontal
        </button>
        <button className='editorbutten' onClick={() => editor.chain().focus().setHardBreak().run()}>
          Hard break
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
          className='editorbutten'
        >
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
            .chain()
              .focus()
              .redo()
              .run()
          }
          className='editorbutten'
        >
          Redo
        </button>
        <button
          onClick={() => editor.chain().focus().setColor('#958DF1').run()}
          className={`${editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active editorbuttenon' : 'editorbutten'}`}
        >
          Purple
        </button>
      </div>
    </div>
    <div onClick={handleSave} className='m-2 py-3 mb-5 rounded-xl text-center font-bold text-[24px] bg-secondary-dark-bg hover:cursor-pointer'>save</div>
    <div className={`${text == '' ? "hidden" : "block"}`}>
      <Viewbox data={text}/>
    </div>
    </>
  )
}

const extensions = [
  BulletList.configure({
    HTMLAttributes: {
      class: 'my-custom-class',
    },
  })
  ,  
  CodeBlock.configure({languageClassPrefix: 'language-',}),      
  Color.configure({ types: [TextStyle.name, ListItem.name,"textStyle"] }),
//   TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: true, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: true, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
]

const content = ``


export default () => {
  return (
    <EditorProvider slotBefore={<Editorbox />} extensions={extensions} content={content}></EditorProvider>
  )
}

