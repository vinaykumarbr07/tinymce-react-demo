import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

export default function App() {
  const [open, setOpen] = useState(false);
  const editorRef = useRef(null);
  const handleClickToOpen = () => {
    setOpen(true);
};

const handleToClose = () => {
    setOpen(false);
};


  return (
    <>
      <Button id='submit-button' onClick={handleClickToOpen}>Click here to edit Tiny editor info</Button>
      <Dialog open={open} onClose={handleToClose}>
                <DialogTitle>{"Submission message"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      initialValue="<p>Your data has been successfully submitted.</p>"
                      init={{
                        height: 500,
                        menubar: false,
                        plugins: ["link", "lists", "textcolor", "code", "table", "image"],
                        toolbar: 'blocks fontfamily fontsize | bold italic bullist numlist | ' +
                          'alignment outdent indent | image link inserttable| forecolor backcolor underline strikethrough | undo redo | code',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                      }}
                    /> 
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleToClose}
                        color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

    </>
  );
}


// {editorOpen ?
//   <Editor
//     onInit={(evt, editor) => editorRef.current = editor}
//     initialValue="<p>This is the initial content of the editor.</p>"
//     init={{
//       height: 500,
//       menubar: false,
//       plugins: ["link", "lists", "textcolor", "code", "table", "image"],
//       toolbar: 'blocks fontfamily fontsize | bold italic bullist numlist | ' +
//         'alignment outdent indent | image link inserttable| forecolor backcolor underline strikethrough | undo redo | code',
//       content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
//     }}
//   /> : ''
// }