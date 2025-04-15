import streamlit as st

st.title("超シンプル To‑Do アプリ")

if "todos" not in st.session_state:
    st.session_state.todos = []

new_task = st.text_input("やることを入力して Enter ⏎")
if new_task:
    st.session_state.todos.append({"task": new_task, "done": False})
    st.experimental_rerun()

st.write("### タスク一覧")
for i, item in enumerate(st.session_state.todos):
    checked = st.checkbox("", value=item["done"], key=f"chk{i}")
    if checked != item["done"]:
        st.session_state.todos[i]["done"] = checked
    text = f"~~{item['task']}~~" if checked else item["task"]
    st.write(text)
