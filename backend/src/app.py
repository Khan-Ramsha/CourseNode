from generating_embeddings.user_embedding import user_syllabus_embedding
from generating_embeddings.course_embedding import course_embedding
from user_syllabus_processing.extract_from_pdf import extract_module_content
from user_syllabus_processing.syllabus_preprocessing import preprocess_text
from similarity.matching import computing_similarity
import json

pdf_path = "backend/artifacts/syllabus.pdf"
module_content = extract_module_content(pdf_path)
content = preprocess_text(module_content)#user pdf syllabus

content = user_syllabus_embedding(content)
with open("backend/data_scrape/cleaned_scraped.json" , 'r') as file:
  data = json.load(file) # nptel course data 

course_syllabus_embedding = course_embedding(data)

print(f" Course syllabus Embedding: {course_syllabus_embedding}")
print(f" User syllabus Embedding: {content}")

# computing similarity matching score of "user syllabus" with "all available nptel courses"
similarity_score = computing_similarity(content, course_syllabus_embedding)
print(similarity_score)