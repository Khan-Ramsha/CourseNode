
def get_course_info(courses_data, course_id):
    for course in courses_data:
        if course['id'] == course_id:
            return course
    return None
