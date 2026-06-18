import { useState } from "react";


function CreateMemo() {
    const [text, setText] = useState('')
    const [content, setContent] = useState('')


    const saveMemo = async () => {

        const response = await fetch(
            "https://click.ecc.ac.jp/ecc/kyamagata/memo-api/backend/index.php",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: text,
                    content: content
                })
            }
        );
        const result = await response.json();

        console.log(result);
    }

    return (
        <>
            <p>メモ作成</p>
            <label htmlFor="title">タイトル</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

            <textarea name="" value={content} onChange={(e) => setContent(e.target.value)}></textarea>

            <button
                type="submit"
                onClick={saveMemo} >
                保存
            </button >

            <p>{text}</p>
            <p>{content}</p>

        </>

    )
}

export default CreateMemo;

