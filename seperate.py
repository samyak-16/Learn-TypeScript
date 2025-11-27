paragraph = "Hello world. This is a test! Did it work?"

def  splitIntoSentences(paragraph) :
    temp = "" 
    sentences = []
    for char in paragraph : 
        temp += char 

        if(char in  ".!?"):
            sentences.append(temp)
            temp =""





    return sentences





for sentence in splitIntoSentences(paragraph) : 
    print(sentence)