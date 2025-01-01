from extract_from_pdf import extract_module_content
import spacy
nlp = spacy.load("en_core_web_sm")
pdf_path = "backend/artifacts/syllabus.pdf"
def preprocess_text(text):
    # Convert to lowercase
    text = text.lower()

    # Parse the text using spaCy
    doc = nlp(text)

    cleaned_text = " ".join([token.lemma_ for token in doc if not token.is_stop and token.is_alpha])

    return cleaned_text
module_content = extract_module_content(pdf_path)
content = preprocess_text(module_content)
print(content)