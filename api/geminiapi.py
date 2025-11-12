import google.generativeai as genai

def new_func():
    API_KEY = ""
    return API_KEY

API_KEY = new_func()

#process prompt
#process prompt
def process_prompt(prompt):
    genai.configure(api_key=API_KEY)
    
    try:
        response = genai.GenerativeModel("gemini-2.0-flash").generate_content(prompt)
        return response.text
    except Exception as e:
        return f"An error occurred: {str(e)}"

#Driver Code
if __name__ == "__main__":
    while True:
        prompt = input("You: ")
        if prompt.lower() in ["exit", "quit"]:
            print("Shutting Down")
            break

        response = process_prompt(prompt)
        print(f"CHATBOT: {response}")