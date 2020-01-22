import React, {useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './mainAdmin.scss';

const MainAdmin= () => {
    const [textfieldValue, setTextfield] = useState("<h1>Sakcenter</h1>");

    const handleEditorChange = (e) => {
        console.log(
          'Content was updated:',
          e.target.getContent()
        );
        setTextfield(e.target.getContent());
      }

      const createMarkup = () => {
          return {__html: textfieldValue}
      }
    return(
        <div className="mainAdminWrapper">
            <div className="adminHeaderWrapper">
                <h1>Admin</h1>
                <button>Logga ut</button>
            </div>
            <div className="tinyMceTest">
                <Editor
                    initialValue={textfieldValue}
                    apiKey="f5jieybbly9rmsegf57hjot7vpzs0mo853kko19fs6z2kh82"
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image', 
                            'charmap print preview anchor help',
                            'searchreplace visualblocks code',
                            'insertdatetime media table paste wordcount'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic | \
                            alignleft aligncenter alignright | \
                            bullist numlist outdent indent | help'
                    }}
                    onChange={handleEditorChange}
                />
            </div>
            <div className="wrapper" dangerouslySetInnerHTML={createMarkup()}>

            </div>
        </div>
    );
};
export default MainAdmin;