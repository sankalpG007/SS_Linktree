from pydantic import BaseModel


class CourseResponse(BaseModel):
    id: int
    title: str
    short_description: str | None = None
    duration: str | None = None
    fees: str | None = None

    class Config:
        from_attributes = True