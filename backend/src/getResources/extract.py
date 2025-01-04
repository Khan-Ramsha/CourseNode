import requests
from sklearn.feature_extraction.text import TfidfVectorizer
from user_syllabus_processing import extract_from_pdf
from user_syllabus_processing.syllabus_preprocessing import preprocess_text

pdf_path = "artifacts/syllabus.pdf"

def extract_keywords(content, n=10):
    # Tokenize the content and extract the top n keywords based on TF-IDF
    vectorizer = TfidfVectorizer(stop_words='english')
    tfidf_matrix = vectorizer.fit_transform([content])
    feature_names = vectorizer.get_feature_names_out()
    sorted_items = sorted(zip(tfidf_matrix.sum(axis=0).A1, feature_names), reverse=True)
    return [item[1] for item in sorted_items[:n]]  # Get top n keywords

module_content = extract_from_pdf.extract_module_content(pdf_path)
content = preprocess_text(module_content)
print(content)
keywords = extract_keywords(content)
print(keywords)