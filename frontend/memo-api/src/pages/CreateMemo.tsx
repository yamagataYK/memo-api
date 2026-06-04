import { useState } from "react";


function CreateMemo() {
    const [text, setText] = useState('')
    const [content, setContent] = useState('')

    const handleClick = () => {
        fetch('https://click.ecc.ac.jp/ecc/kyamagata/memo-api/backend/',
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: (text),
                    content: (content)
                })
            })
            .then((response) => response.json())//ここでBodyからJSONを返す
            .then((data) => {
                console.log(data);
            })
            .catch((e) => {
                console.log(e)  //エラーをキャッチし表示     
            })
    };

    return (
        <>
            <p>メモ作成</p>
            <label htmlFor="title">タイトル</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

            <textarea name="" value={content} onChange={(e) => setContent(e.target.value)}></textarea>

            <button type="submit" onClick={handleClick} >保存</button >

            <p>{text}</p>
            <p>{content}</p>

        </>

    )
}

export default CreateMemo;

