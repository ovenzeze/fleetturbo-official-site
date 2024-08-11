const isValidTrackingNo = (value: string) => /^[a-zA-Z0-9]{2,5}\d{12}$/.test(value)

export { isValidTrackingNo }
